import { useState } from 'react'
import { User, Coins } from 'lucide-react'
import './App.css'

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')
  const [activeTopMenu, setActiveTopMenu] = useState('Feed')
  const [userRyos] = useState(1250)

  const sidebarMenuItems = [
    'Dashboard',
    'Cartos', 
    'Baralhos',
    'Missões',
    'Personagens',
    'Immigos',
    'Loja',
    'Troces',
    'Rankings',
    'Configurações'
  ]

  const topMenuItems = [
    'Feed',
    'Jutsus', 
    'Ferramentas',
    'História',
    'Frases',
    'Imagens'
  ]

  const renderMainContent = () => {
    switch (activeTopMenu) {
      case 'Feed':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Feed do RPG</h2>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <p className="text-gray-700">Bem-vindo ao sistema de gerenciamento do RPG Naruto!</p>
              <p className="text-gray-600 mt-2">Aqui você pode gerenciar seus cards, jutsus, personagens e muito mais.</p>
            </div>
          </div>
        )
      case 'Jutsus':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Seus Jutsus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg">Kage Bunshin no Jutsu</h3>
                <p className="text-gray-600 text-sm">Tipo: Ninjutsu</p>
                <p className="text-gray-600 text-sm">Rank: B</p>
                <p className="text-gray-700 mt-2">Cria clones sólidos do usuário.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg">Rasengan</h3>
                <p className="text-gray-600 text-sm">Tipo: Ninjutsu</p>
                <p className="text-gray-600 text-sm">Rank: A</p>
                <p className="text-gray-700 mt-2">Esfera de chakra rotativo concentrado.</p>
              </div>
            </div>
          </div>
        )
      case 'Ferramentas':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Ferramentas Ninja</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl mb-2">🗡️</div>
                <p className="font-semibold">Kunai</p>
                <p className="text-sm text-gray-600">Quantidade: 15</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl mb-2">⭐</div>
                <p className="font-semibold">Shuriken</p>
                <p className="text-sm text-gray-600">Quantidade: 25</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{activeTopMenu}</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-700">Conteúdo da seção {activeTopMenu} será implementado em breve.</p>
            </div>
          </div>
        )
    }
  }

  const renderSidebarContent = () => {
    switch (activeMenuItem) {
      case 'Dashboard':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg">Total de Cards</h3>
                <p className="text-3xl font-bold text-blue-600">47</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg">Jutsus Aprendidos</h3>
                <p className="text-3xl font-bold text-green-600">12</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg">Missões Completadas</h3>
                <p className="text-3xl font-bold text-purple-600">8</p>
              </div>
            </div>
          </div>
        )
      case 'Cartos':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Seus Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="w-full h-32 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">NARUTO</span>
                </div>
                <h3 className="font-semibold">Naruto Uzumaki</h3>
                <p className="text-sm text-gray-600">Rank: S</p>
                <p className="text-sm text-gray-600">Ataque: 95 | Defesa: 80</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="w-full h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">SASUKE</span>
                </div>
                <h3 className="font-semibold">Sasuke Uchiha</h3>
                <p className="text-sm text-gray-600">Rank: S</p>
                <p className="text-sm text-gray-600">Ataque: 98 | Defesa: 85</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{activeMenuItem}</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-700">Conteúdo da seção {activeMenuItem} será implementado em breve.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          {/* Logo e Título */}
          <div className="flex items-center gap-3">
            <div className="naruto-logo">
              🍥
            </div>
            <h1 className="text-2xl font-bold text-black">RPG NARUTO</h1>
          </div>

          {/* Menu Superior */}
          <div className="top-menu">
            {topMenuItems.map((item) => (
              <div
                key={item}
                className={`top-menu-item ${activeTopMenu === item ? 'active' : ''}`}
                onClick={() => setActiveTopMenu(item)}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Perfil e Ryos */}
          <div className="flex items-center gap-3">
            <div className="ryos-display">
              <Coins className="inline w-4 h-4 mr-1" />
              Ryos: {userRyos.toLocaleString()}
            </div>
            <div className="profile-circle">
              <User className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen p-4">
          <div className="sidebar-menu">
            {sidebarMenuItems.map((item) => (
              <div
                key={item}
                className={`sidebar-menu-item ${activeMenuItem === item ? 'active' : ''}`}
                onClick={() => setActiveMenuItem(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          {activeMenuItem === 'Dashboard' ? renderSidebarContent() : renderMainContent()}
        </main>
      </div>
    </div>
  )
}

export default App
