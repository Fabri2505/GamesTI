export default function Header(promps : {titulo:string}){
    return (
        <header className=" text-white p-4 border-b border-gray-700">
            <h1 className="text-2xl font-bold">{promps.titulo}</h1>
        </header>
    );
}