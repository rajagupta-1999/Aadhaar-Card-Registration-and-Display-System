const generatedUIDs = new Set();

const generateUID = () => {
    let uid;
    do {
        uid = Math.floor(Math.random() * 1e12).toString().padStart(12, '0');
    } while (generatedUIDs.has(uid));
    generatedUIDs.add(uid);
    return uid;
};

export default generateUID;
