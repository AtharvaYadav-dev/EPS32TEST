import { h } from "preact"
import { useState } from "preact/hooks"

const PrinterSettings = () => {
    const [zOffset, setZOffset] = useState(0)
    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)
    const [isLevelingActive, setIsLevelingActive] = useState(false)
    const [stepValue, setStepValue] = useState(10)

    return (
        <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{ 
                color: '#333',
                margin: '0 0 20px 0',
                paddingBottom: '10px',
                borderBottom: '1px solid #e0e0e0',
                fontSize: '20px',
                fontWeight: '600'
            }}>
                PRINTER SETTINGS
            </h2>
            
            <div style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
                <h3 style={{ 
                    color: '#555',
                    margin: '0 0 15px 0',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                }}>
                    SET LEVEL
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ 
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        color: '#666',
                        fontWeight: '500'
                    }}>
                        Z LEVELING
                    </label>
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '10px',
                        marginBottom: '15px',
                        alignItems: 'center'
                    }}>
                        <button 
                            style={buttonStyle('#4CAF50')}
                            onClick={() => setZOffset(prev => (parseFloat(prev) + 0.1).toFixed(1))}
                        >
                            Z+
                        </button>
                        
                        <input 
                            type="number" 
                            style={inputStyle}
                            value={zOffset} 
                            onChange={(e) => setZOffset(e.target.value)}
                        />
                        
                        <button 
                            style={buttonStyle('#f44336')}
                            onClick={() => setZOffset(prev => (parseFloat(prev) - 0.1).toFixed(1))}
                        >
                            Z-
                        </button>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                            style={{
                                ...buttonStyle(isLevelingActive ? '#f44336' : '#4CAF50'),
                                flex: 1
                            }}
                            onClick={() => setIsLevelingActive(!isLevelingActive)}
                        >
                            {isLevelingActive ? 'DEACTIVATE' : 'ACTIVATE'}
                        </button>
                        
                        <button 
                            style={{
                                ...buttonStyle('#2196F3'),
                                flex: 1
                            }}
                        >
                            SET
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
                <h3 style={{ 
                    color: '#555',
                    margin: '0 0 15px 0',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                }}>
                    SET INDEX
                </h3>
                
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ 
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '8px',
                        flex: 1,
                        maxWidth: '220px'
                    }}>
                        <div style={{ 
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '8px',
                            margin: '0 auto',
                            width: 'fit-content'
                        }}>
                            <div style={{ width: '60px', height: '40px' }}></div>
                            <button style={directionButtonStyle}>Y+</button>
                            <div style={{ width: '60px', height: '40px' }}></div>
                            
                            <button style={directionButtonStyle}>X-</button>
                            <div style={{ 
                                width: '60px', 
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#e9ecef',
                                borderRadius: '4px',
                                fontWeight: '600',
                                fontSize: '14px'
                            }}>
                                {stepValue}
                            </div>
                            <button style={directionButtonStyle}>X+</button>
                            
                            <div style={{ width: '60px', height: '40px' }}></div>
                            <button style={directionButtonStyle}>Y-</button>
                            <div style={{ width: '60px', height: '40px' }}></div>
                        </div>
                    </div>
                    
                    <div style={{ 
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '8px',
                        width: '200px'
                    }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={labelStyle}>X:</label>
                            <input 
                                type="number" 
                                style={inputStyle}
                                value={xPos} 
                                onChange={(e) => setXPos(e.target.value)}
                            />
                        </div>
                        
                        <div style={{ marginBottom: '15px' }}>
                            <label style={labelStyle}>Y:</label>
                            <input 
                                type="number" 
                                style={inputStyle}
                                value={yPos} 
                                onChange={(e) => setYPos(e.target.value)}
                            />
                        </div>
                        
                        <button style={{
                            ...buttonStyle('#2196F3'),
                            width: '100%',
                            padding: '10px'
                        }}>
                            SET
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Reusable style objects
const buttonStyle = (bgColor) => ({
    padding: '6px 12px',
    backgroundColor: bgColor,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background-color 0.2s',
    ':hover': {
        opacity: 0.9
    }
})

const inputStyle = {
    width: '80px',
    padding: '6px 10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '14px',
    ':focus': {
        outline: 'none',
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
}

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
    fontWeight: '500'
}

const directionButtonStyle = {
    width: '60px',
    height: '40px',
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    ':hover': {
        backgroundColor: '#f1f1f1'
    }
}

export { PrinterSettings }