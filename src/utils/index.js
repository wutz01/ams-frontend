let data = {
  menuItems: [
    { icon: 'mdi-view-dashboard', text: 'Dashboard', routeName: 'dashboard' },
    {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'Masterlist',
      model: false,
      children: [
        { icon: 'mdi-account-multiple-outline', text: 'Brethrens', routeName: 'masterlist-member' },
        { icon: 'mdi-shape', text: 'Workers', routeName: 'masterlist-workers' }
      ]
    },
    {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'Reports',
      model: false,
      children: [
        { icon: 'mdi-file-chart', text: 'Sales' },
        { icon: 'mdi-chart-timeline', text: 'Delivery Receipt' }
      ]
    },
    {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'User Management',
      model: false,
      children: [
        { icon: 'mdi-account-plus', text: 'Users', allowedUser: ['ADMIN'] },
        { icon: 'mdi-verified', text: 'User Roles', allowedUser: ['ADMIN'] }
      ]
    },
    // { icon: 'settings', text: 'Settings' },
    { icon: 'mdi-logout', text: 'Logout', routeName: 'logout' }
  ]
}

export default data
