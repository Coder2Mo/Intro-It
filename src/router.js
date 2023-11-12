const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/Intro-It/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Intro-It/:queryParams(.*)',
    name: 'Result',
    component: Result,
    props: true
  }
]
