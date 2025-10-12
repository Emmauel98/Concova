const ChunkArray = (data: any[], size: number)=>{
    let result = [];
    for (let i = 0; i < data.length; i+= size) {
        result.push(data.slice(i, i + size));
    };
    return result;
};

export default ChunkArray;

// data = 6 && size = 2
