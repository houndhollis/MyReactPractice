import create from 'zustand';

const useStore = create((set)=>({
  count : 0,
  isDark: false,
  toggleIsDark: () => set((state)=>({isDark:!state.isDark})),
  increaseCount: () => set((state)=>({count: state.count + 1})),
  decreaseCount: () => set((state)=>({count: state.count - 1}))
}))

export default useStore