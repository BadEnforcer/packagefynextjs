export default async function fileToBuffer(file: File): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const arrayBuffer = reader.result as ArrayBuffer;
            const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer
            resolve(buffer);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsArrayBuffer(file);
    });
}
