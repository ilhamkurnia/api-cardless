const billerList = [
    {
        case: {
          title: "TC Biller List",
          status: 200,
        },

        payload: {
        },

      },
]

const scheduleInfo= [
    {
        case: {
          title: "TC Schedule Info",
          status: 200,
        },
      },
]

const inquiryInfaq= [
    {
        case: {
          title: "TC Inquiry Infaq",
          status: 200,
        },
        payload: {
            payeeCode : "BSI5005",
            isSchedule : false,
            accountIndex : 0,
            transactionAmount : 5000
        },
      },
]

const executeInfaq= [
    {
        case: {
          title: "TC Execute Infaq",
          status: 200,
        },
        payload: {
            mpin : "Oz1tDDZnDr36QBcD0T\/8xvUUNVKmVf7IWwh8l2dck783coC5vbV269kwtsGPdNivLn0ptDA\/vLVpG+iybeRnSs\/OkNQ\/x8K8ew01CqmY9bXy8tqQS143BESlZ4Vx4NDPPzJvlTt50RhrGr32oQyOkGlCrniTXiPw\/ZX2hg1OwHU="
        },
      },
]

module.exports = { billerList, scheduleInfo, inquiryInfaq, executeInfaq};