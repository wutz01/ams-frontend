let data = {
  menuItems: [
    { icon: 'mdi-view-dashboard', text: 'Dashboard', routeName: 'dashboard' },
    {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'Masterlist',
      model: false,
      children: [
        { icon: 'mdi-account-multiple-outline', text: 'Brethrens', allowedUser: ['ADMIN'], routeName: 'product-supplier' },
        { icon: 'mdi-shape', text: 'Workers', allowedUser: ['ADMIN'], routeName: 'product-category' }
      ]
    },
    // {
    //   icon: 'keyboard_arrow_up',
    //   'icon-alt': 'keyboard_arrow_down',
    //   text: 'Product Management',
    //   allowedUser: ['ADMIN'],
    //   model: false,
    //   children: [
    //     { icon: 'mdi-download-network', text: 'Supplier', allowedUser: ['ADMIN'], routeName: 'product-supplier' },
    //     { icon: 'mdi-shape', text: 'Category', allowedUser: ['ADMIN'], routeName: 'product-category' },
    //     { icon: 'mdi-water-pump', text: 'Products', allowedUser: ['ADMIN'], routeName: 'products' }
    //   ]
    // },
    // {
    //   icon: 'keyboard_arrow_up',
    //   'icon-alt': 'keyboard_arrow_down',
    //   text: 'Quotations',
    //   model: false,
    //   children: [
    //     { icon: 'mdi-shape', text: 'Pending' },
    //     { icon: 'mdi-view-list', text: 'Quotation List' }
    //   ]
    // },
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
        { icon: 'mdi-account-plus', text: 'Users' },
        { icon: 'mdi-verified', text: 'User Roles' }
      ]
    },
    // { icon: 'settings', text: 'Settings' },
    { icon: 'mdi-logout', text: 'Logout', routeName: 'logout' }
  ]
}

export default data
