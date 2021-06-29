import React from 'react'

function convertActionTypeToFunction(actionType){
return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase())
}

export default function createReducer(state,action,handlers){
    const key=convertActionTypeToFunction(action.type);
    const handler=handlers[key];
    if(handler)
    return handler(state,action)
}