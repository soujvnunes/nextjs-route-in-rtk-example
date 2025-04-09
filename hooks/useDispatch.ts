import { AppDispatch } from '@/app/store'
import { useDispatch as useReduxDispatch } from 'react-redux'

const useDispatch = useReduxDispatch.withTypes<AppDispatch>()

export default useDispatch
