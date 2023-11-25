# map + parseInt 经典题

-map callback 返回值是由callback的每一项组成的新数组
callback 会接收到 item:当前项  index:下标  array:数组本身

parseInt 就是当前的callback item,可选的参数radix 进制表达
默认10进制，为0无效，也为十进制
1进制 item2 NaN
2进制 item3 NaN