import { h } from "preact"
import { Send } from "preact-feather"

export const Terminal = ({ content = "", onSendCommand }) => {
  const [command, setCommand] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (command.trim()) {
      onSendCommand(command)
      setCommand("")
    }
  }

  return (
    <div className="terminal-section">
      <div className="section-header">TERMINAL</div>
      <div className="terminal-content">
        {content || (
          <div style={{ color: '#666', fontStyle: 'italic' }}>
            No terminal output available
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          className="input-field"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command..."
        />
        <button type="submit" className="action-button">
          <Send size={16} />
          <span>Send</span>
        </button>
      </form>
    </div>
  )
}

export default Terminal
