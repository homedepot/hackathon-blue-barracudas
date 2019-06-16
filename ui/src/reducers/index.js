import wishReducer from './wishReducer'

export {
  wishReducer,
}

/**
 * The keys of this object are the points within the redux store
 * at which each reducer will be mounted.
 */
const allReducers = Object.freeze({
  wish: wishReducer,
})

export default allReducers
