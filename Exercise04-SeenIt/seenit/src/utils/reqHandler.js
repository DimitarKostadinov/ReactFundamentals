const appKey='kid_BkXe2bw_b'
const appSecret='8e07bc82990e42b792279e47c71aca31'
const hostUrl='https://baas.kinvey.com'
const username=localStorage.getItem('username')

let reqHandler={
    login:(payload)=>{
       return fetch(`${hostUrl}/user/${appKey}/login`,{
            method:'POST',
            headers:{
                Authorization:'Basic '+ btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    },
    register:(payload)=>{
       return fetch(`${hostUrl}/user/${appKey}`,{
            method:'POST',
            headers:{
                Authorization:'Basic '+ btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        }).then(res=>{
            return res.json()
    })
    },
    pullPosts:()=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`,{
            method:'GET',
            headers:{
                Authorization:'Kinvey ' +localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json()
        })
    },
    createPost:payload=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts`,{
            method:'POST',
            headers:{
                Authorization:'Kinvey ' +localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    },
    pullMyPosts:()=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`,{
            method:'GET',
            headers:{
                Authorization:'Kinvey ' +localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json()
        })
    },
    createComment:payload=>{
        return fetch(`${hostUrl}/appdata/${appKey}/comments`,{
            method:'POST',
            headers:{
                Authorization:'Kinvey ' +localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    },
    

}

export default reqHandler