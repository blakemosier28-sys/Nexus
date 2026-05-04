const chat = document.getElementById('chat');
const input = document.getElementById('input');
const send = document.getElementById('send');

function appendMessage(role, text) {
  const line = document.createElement('div');
  line.style.marginBottom = '10px';
  line.innerHTML = '<strong style="color:#00ffcc">' + role + ':</strong> ' + text;
  chat.appendChild(line);
  chat.scrollTop = chat.scrollHeight;
}

send.addEventListener('click', () => {
  const userText = input.value.trim();
  if (!userText) return;
  appendMessage('BLAKE', userText);
  input.value = '';
  appendMessage('NEXUS', 'API connection not yet wired. Phase 2 handles this.');
});
