// src/components/App/index.js
import { h } from "preact"
import { useState } from "preact/hooks"
import {
    RouterContextProvider,
    HttpQueueContextProvider,
    UiContextProvider,
    SettingsContextProvider,
    DatasContextProvider,
    WsContextProvider,
} from "../../contexts"
import { TargetContextProvider } from "../../targets"
import { ContainerHelper } from "../Controls"
import { ContentContainer } from "../../areas"
import { ElementsCache } from "../../areas/elementsCache"
import Header from "../Header/index.jsx"
import Sidebar from "../Sidebar/index.jsx"
import { PrinterSettings } from "../Panels/PrinterSettings"
import "../../style/custom.css"

const App = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const handleSectionChange = (section) => {
        console.log('Changing section to:', section)
        setActiveSection(section)
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const renderContent = () => {
        console.log('Rendering content for section:', activeSection)
        
        if (activeSection === 'printer') {
            return <PrinterSettings />
        }
        
        return (
            <div className="content-wrapper">
                <ContainerHelper id="top_container" active={true}/>
                <ElementsCache />
                <ContentContainer />
            </div>
        )
    }

    return (
        <div id="app">
            <div style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '10px',
                zIndex: 1000,
                fontFamily: 'monospace'
            }}>
                Active: {activeSection} | Sidebar: {sidebarOpen ? 'Open' : 'Closed'}
            </div>

            <DatasContextProvider>
                <TargetContextProvider>
                    <RouterContextProvider>
                        <UiContextProvider>
                            <HttpQueueContextProvider>
                                <SettingsContextProvider>
                                    <WsContextProvider>
                                        <Header onMenuClick={toggleSidebar} />
                                        <div className="app-content">
                                            {sidebarOpen && (
                                                <Sidebar 
                                                    activeSection={activeSection}
                                                    onSectionChange={handleSectionChange}
                                                />
                                            )}
                                            <main className="main-panel">
                                                {renderContent()}
                                            </main>
                                        </div>
                                    </WsContextProvider>
                                </SettingsContextProvider>
                            </HttpQueueContextProvider>
                        </UiContextProvider>
                    </RouterContextProvider>
                </TargetContextProvider>
            </DatasContextProvider>
        </div>
    )
}

export { App }