export const theme = {
  light: {
    primary: '#1E90FF',      // Azul principal
    secondary: '#DEB887',    // Marrom claro/dourado
    accent: '#8B4513',       // Marrom escuro
    background: '#FFFFFF',
    text: '#333333',
    card: '#F5F5F5',
    border: '#E0E0E0',
    success: '#4CAF50',
    warning: '#FFA726',
    error: '#EF5350',
    chart: {
      positive: '#4CAF50',
      negative: '#EF5350',
      neutral: '#757575'
    }
  },
  dark: {
    primary: '#1E90FF',      // Mantém o azul principal
    secondary: '#DEB887',    // Mantém o marrom claro/dourado
    accent: '#8B4513',       // Mantém o marrom escuro
    background: '#121212',
    text: '#FFFFFF',
    card: '#1E1E1E',
    border: '#333333',
    success: '#81C784',
    warning: '#FFB74D',
    error: '#E57373',
    chart: {
      positive: '#81C784',
      negative: '#E57373',
      neutral: '#9E9E9E'
    }
  },
  // Configurações de animação
  animation: {
    fast: '0.2s',
    medium: '0.3s',
    slow: '0.5s',
    timing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  // Breakpoints para responsividade
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },
  // Espaçamentos consistentes
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  // Bordas arredondadas
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '9999px'
  },
  // Sombras
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.1)'
  }
}; 