document.getElementById('executeButton').addEventListener('click', async () => {
    const script = document.getElementById('scriptInput').value.trim();

    if (script === '') {
        alert('Please enter a Lua script to execute.');
        return;
    }

    try {
        const response = await fetch('/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ script })
        });

        if (!response.ok) {
            throw new Error('Failed to execute script.');
        }

        const result = await response.text();
        document.getElementById('output').textContent = result;
    } catch (error) {
        console.error('Error executing script:', error);
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
});
