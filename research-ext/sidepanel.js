const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatContainer = document.getElementById('chatContainer');
const operationSelect = document.getElementById('operation');

sendBtn.addEventListener('click', async () => {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, 'user-msg');
  userInput.value = '';
  addMessage('⏳ Processing...', 'bot-msg');

  try {
    const response = await fetch('http://localhost:8080/api/research/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: operationSelect.value,
        content: text
      })
    });

    const result = await response.text();
    updateLastBotMessage(result);
  } catch (err) {
    console.error(err);
    updateLastBotMessage('⚠️ Could not connect to Research Assistant backend.');
  }
});

function addMessage(text, className) {
  const div = document.createElement('div');
  div.className = className;
  div.textContent = text;
  chatContainer.appendChild(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function updateLastBotMessage(newText) {
  const msgs = chatContainer.getElementsByClassName('bot-msg');
  msgs[msgs.length - 1].textContent = newText;
}
