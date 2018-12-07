export default{
        sum(state){//当state发生变化的时候，这里也就自动跟着变了
            return state.a+state.b+state.c;
        }
}