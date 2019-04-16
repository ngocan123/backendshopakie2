export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: '',
      },
    },
    {
      name: 'Quản lý tài khoản',
      url: '/admin',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Danh sách tài khoản',
          url: '/admin/index',
          icon: 'icon-puzzle',
        },
        {
          name: 'Nhóm phần quyền',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Danh sách quyền hạn',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Quản lý sản phẩm',
      url: '/product',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Danh sách sản phẩm',
          url: '/product/index',
          icon: 'icon-puzzle',
        },
        {
          name: 'Danh mục sản phẩm',
          url: '/catproduct/index',
          icon: 'icon-puzzle',
        }
      ],
    },
  ],
};
