const showMobileNav = ref<boolean>(false)

export const useNav = () => {
  const toggleNav = () => {
    showMobileNav.value = !showMobileNav.value
  }

  return {
    toggleNav,
    showMobileNav
  }
}
