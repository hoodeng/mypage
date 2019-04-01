// function data(result){
//      return result.data;
// }

const networkUtil = {
  isSucess: function (result) {
    return result.code == 200;
  }
}


export default {
  networkUtil
}
