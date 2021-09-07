import { createStore } from 'vuex'
import appHeader from './modules/appHeader'
import appFooter from './modules/appFooter'
import appPoints from './modules/appPoints'
import appBrowseCity from './modules/appBrowseCity'
import appMenu from './modules/appMenu'
import appProducts from './modules/appProducts'
import appAbout from './modules/appAbout'
import appContacts from './modules/appContacts'
import appSidebar from './modules/appSidebar'

export default createStore({
  modules: {
    appHeadSec: appHeader,
    appFooSec: appFooter,
    appPoinSec: appPoints,
    appBrCitySec: appBrowseCity,
    appMenuSec: appMenu,
    appMProdSec: appProducts,
    appAboutSec: appAbout,
    appContactsSec: appContacts,
    appSidebarSec: appSidebar,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
})
