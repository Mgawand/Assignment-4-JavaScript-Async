function fetchData(data) {
    return new Promise(resolve => setTimeout(() => {
      resolve(data)
    }, 1000))
}

function sendUserLoginRequest(userId){
    console.log(`Sending login request for ${userId}...`);
    return fetchData(userId).then(() => {
        console.log('Login successfull.', userId);
        return userId;
    })
}

function getUserProfile(userId){
    console.log(`Fetching profile for ${userId}...`);
    return fetchData({
        user1: {name: 'Vijay', points: 100},
        user2: {name: 'Sahana', points: 200}
    }).then(profiles => {
        console.log(`Received profile for ${userId}`);
        return profiles[userId];
    });
}

function getUserPosts(userId){
    console.log(`Fetching posts for ${userId}...`);
    return fetchData({
        user1: [{id: 1, title: 'Economics 101'}, {id: 2, title: 'How to negotiate'}],
        user2: [{id: 3, title: 'CSS Animations'}, {id: 4, title: 'Understanding event loop'}]
    }).then(posts => {
        console.log(`Received posts for ${userId}`);
        return posts[userId];
    });
}


/**
 * Task 1: Send a login request for user1 -> get user profile data -> get user posts data
 */

async function userDataSerial(){
  console.time('userData-serial')
  await sendUserLoginRequest('user1')
  .then(user => getUserProfile('user1'))
  .then(user => console.log(user))
  .then(user => getUserPosts('user1'))
  .then(user => console.log(user))
  console.timeEnd('userData-serial');
}

/**
 * Task 2: Send a login request for user1 -> get user profile data and get user posts data simultaneously
 */

async function userDataParallel() {
  console.time('userData-parallel');
  await sendUserLoginRequest('user1')
  await getUserProfile('user1')
    .then(data => console.log(data))
  await getUserPosts('user1')
    .then(data => console.log(data))
  console.timeEnd('userData-parallel');
}

userDataSerial();
userDataParallel();
