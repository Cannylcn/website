'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = require('../store/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return import('@/page/Index');
};
var Login = function Login() {
  return import('@/page/Login');
};
var LoginType = function LoginType() {
  return import('@/page/LoginType');
};
var Register = function Register() {
  return import('@/page/Register');
};
var PopularMovie = function PopularMovie() {
  return import('@/page/PopularMovie');
};
var SongList = function SongList() {
  return import('@/page/SongListDetail');
};
var SongPlay = function SongPlay() {
  return import('@/page/SongPlay');
};
var Recommend = function Recommend() {
  return import('@/page/Recommend');
};
var AllSongList = function AllSongList() {
  return import('@/page/AllSongList');
};
var Ranking = function Ranking() {
  return import('@/page/Ranking');
};
var UserInfo = function UserInfo() {
  return import('@/page/UserInfo');
};
var MyMusic = function MyMusic() {
  return import('@/page/MyMusic');
};
var Social = function Social() {
  return import('@/page/SocialExt');
};
var About = function About() {
  return import('@/page/About');
};
var SettingUp = function SettingUp() {
  return import('@/page/SettingUp');
};
var Timing = function Timing() {
  return import('@/page/Timing');
};
var Message = function Message() {
  return import('@/page/Message');
};
var Vip = function Vip() {
  return import('@/page/Vip');
};
var Store = function Store() {
  return import('@/page/Store');
};
var Skin = function Skin() {
  return import('@/page/Skin');
};
var MyDynamic = function MyDynamic() {
  return import('@/page/MyDynamic');
};
var Attention = function Attention() {
  return import('@/page/Attention');
};
var Fans = function Fans() {
  return import('@/page/Fans');
};

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
    // meta: {
    //   requireAuth: true
    // }
  }, {
    path: '/popular',
    name: 'popularMovie',
    component: PopularMovie,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/songlist',
    name: 'songList',
    component: SongList
  }, {
    path: '/songplay',
    name: 'songplay',
    component: SongPlay
  }, {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  }, {
    path: '/info',
    name: 'info',
    component: UserInfo
  }, {
    path: '/mymusic',
    name: 'mymusic',
    component: MyMusic
  }, {
    path: '/social',
    name: 'social',
    component: Social
  }, {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/set',
    name: 'set',
    component: SettingUp
  }, {
    path: '/timing',
    name: 'timing',
    component: Timing
  }, {
    path: '/message',
    name: 'message',
    component: Message
  }, {
    path: '/vip',
    name: 'vip',
    component: Vip
  }, {
    path: '/store',
    name: 'store',
    component: Store
  }, {
    path: '/skin',
    name: 'skin',
    component: Skin
  }, {
    path: '/dynamic',
    name: 'dynamic',
    component: MyDynamic
  }, {
    path: '/attention',
    name: 'attention',
    component: Attention
  }, {
    path: '/fans',
    name: 'fans',
    component: Fans
  }, {
    path: '/allsonglist',
    name: 'allsonglist',
    component: AllSongList
  }, {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/logintype',
    name: 'logintype',
    component: LoginType
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '*',
    component: Login,
    hidden: true
  }]
});

var history = window.sessionStorage;
history.clear();
var historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);
var isPush = false;
var endTime = Date.now();
// let methods = ['push', 'go', 'replace', 'forward', 'back']

router.beforeEach(function (to, from, next) {
  var toIndex = history.getItem(to.path);
  var fromIndex = history.getItem(from.path);

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || toIndex === '0' && fromIndex === '0') {
      _index2.default.dispatch('updateDirection', 'forward');
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && Date.now() - endTime < 377) {
        _index2.default.dispatch('updateDirection', '');
      } else {
        _index2.default.dispatch('updateDirection', 'reverse');
      }
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    _index2.default.dispatch('updateDirection', 'forward');
  }

  if (/\/http/.test(to.path)) {
    var url = to.path.split('http')[1];
    window.location.href = 'http' + url;
  } else {
    next();
  }

  var token = localStorage.getItem('token');
  if (to.meta.requireAuth) {
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

exports.default = router;
//# sourceMappingURL=index.js.map