export interface IUploadLimit {
  limit: number
  time: number
}

export const UploadLimit = {
  getCurrentValue():IUploadLimit {
    const value = localStorage.getItem('upload_limit')
    if(!value){
      localStorage.setItem('upload_limit', JSON.stringify({
        limit: 1000,
        time: new Date()
      }))
      return {
        limit: 1000,
        time: new Date().getTime()
      }
    }
    return JSON.parse(value)
  },
  setUploadLimit(data: IUploadLimit) {
    localStorage.setItem('upload_limit', JSON.stringify(data))
  },
  updateUploadLimit(uploadedCount: number) {
    const currentValue = JSON.parse(localStorage.getItem('upload_limit')!)

    localStorage.setItem('upload_limit', JSON.stringify({...currentValue, limit: currentValue.limit - uploadedCount}))
  },
}
