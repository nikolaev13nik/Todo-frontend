export function encoderBase64(user) {
let str= user.login+":"+user.password;
let base64=btoa(str);
return "Basic "+base64;
}

export function upgradeDateForSort(tasks) {
    tasks.map(task => {
        let timestampCreated = new Date(task.createdDate).getTime() / 1000;
        let timestampModified = new Date(task.modifiedDate).getTime() / 1000;
        task.createdTime = timestampCreated;
        task.modifiedTime = timestampModified;

    })
    return tasks;
};