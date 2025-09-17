import Card from "../components/Card"
import applewatchImg from "../assets/applewatch.jpeg"
import headsetImg from "../assets/headset.jpeg"
import ipadImg from "../assets/ipad.jpg"
import monitorImg from "../assets/monitor.jpeg"
import mouseImg from "../assets/mouse.jpeg"
import notebookImg from "../assets/notebook.jpeg"
import smatphoneImg from "../assets/smartphone.jpeg"
import tecladoImg from "../assets/teclado.jpg"


function Home() {

const produtos = [
        {
            id: 1,
            tag: "Novo",
            nome: "Notebook Gamer X1",
            descricao: "Processador Intel i7, 16GB RAM, SSD 512GB e placa de vídeo dedicada.",
            preco: 6500.00, 
            avaliacao: 4.8, 
            imagem: notebookImg
        },
        {
            id: 2,
            tag: "Novo",
            nome: "Smartphone Galaxy Z",
            descricao: "Tela dobrável AMOLED, 256GB de armazenamento e câmera tripla.",
            preco: 7200.00,
            avaliacao: 4.7,
            imagem: smatphoneImg
        },
        {
            id: 3,
            tag: "Promoção",
            nome: "iPad Pro 12.9",
            descricao: "Chip M2, 128GB, compatível com Apple Pencil 2ª geração.",
            preco: 9999.00,
            avaliacao: 5,
            imagem: ipadImg
        },
        {
            id: 4,
            tag: "Promoção",
            nome: "Headset HyperX Cloud II",
            descricao: "Som surround 7.1, microfone removível e estrutura de alumínio.",
            preco: 850.00,
            avaliacao: 4.6,
            imagem: headsetImg
        },
        {
            id: 5,
            tag: "Promoção",
            nome: "Apple Watch Series 9",
            descricao: "Monitoramento de saúde, GPS, resistência à água e tela Always-On.",
            preco: 4299.00,
            avaliacao: 4.7,
            imagem: applewatchImg
        },
        {
            id: 6,
            tag: "Promoção",
            nome: "Monitor UltraWide LG 34''",
            descricao: "Resolução QHD, taxa de atualização 144Hz e suporte HDR10.",
            preco: 3200.00,
            avaliacao: 4.8,
            imagem: monitorImg
        },
        {
            id: 7,
            tag: "Novo",
            nome: "Teclado Mecânico Logitech G Pro",
            descricao: "Switches GX Blue, iluminação RGB e design compacto para gamers.",
            preco: 950.00,
            avaliacao: 4.5,
            imagem: tecladoImg
        },
        {
            id: 8,
            tag: "Promoção",
            nome: "Mouse Razer DeathAdder V3",
            descricao: "Sensor óptico Focus+, 20.000 DPI, leve e ergonômico.",
            preco: 650.00,
            avaliacao: 3.8,
            imagem: mouseImg
        }
    ]

    return(
        <>
            <h1>Produtos</h1>
            <div className="produtos-grid">
                {produtos.map(produto => <Card key={produto.id} item={produto}></Card>)}
            </div>
            
        </>
    )
}

export default Home