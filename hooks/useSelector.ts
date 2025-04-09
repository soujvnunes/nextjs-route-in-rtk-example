import { RootState } from '@/app/store'
import { useSelector as useReduxSelector } from 'react-redux'

const useSelector = useReduxSelector.withTypes<RootState>()

export default useSelector
