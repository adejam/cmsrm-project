import { RERENDER_PRELINE } from "@/lib/constants"
import { useLocalStorage } from "@mantine/hooks"

const useRerenderPreline = () => {
  const [rerenderPreline, setRerenderPreline] = useLocalStorage<any>({
    key: RERENDER_PRELINE,
  })

  return { setRerenderPreline, rerenderPreline }
}

export default useRerenderPreline
