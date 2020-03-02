const Postreducer=(state=[],action)=>
{
    console.log(action.type,action.data)

switch (action.type) {
    case 'userInfo':
        return [action.data];
    default:
        return state;
}

}
export default Postreducer;