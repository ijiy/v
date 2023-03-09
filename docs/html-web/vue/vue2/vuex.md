# vue vuex

## store/index.js
```js
{
	state: { // 驱动应用的数据源
		count: 0
	},
	mutations: { // 同步改变 state 的方法集合
		increment (state, n) {
			state.count += n;
		}
	},
	actions: { // 异步改变 state 的方法集合
		incrementAsync ({ commit }, n) {
			commit('increment', n);
		}
	},
	modules: {
		test
	}
}
```

## 使用
```js
import store from '../store';

store.dispatch('incrementAsync', 2);

store.commit('increment', 2);

{
	computed: {
		// 让 store 的数据可响应
		count () {
			return store.state.count
		},
	}
}
```
