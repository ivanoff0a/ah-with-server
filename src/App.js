import React, { Component } from "react";
import MapComponent from "./components/Map/MapComponent";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Routes from "./constants/Routes.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showHideInfo: "",
      showHideSidebar: "-isShown",
      showHideArrow: "",
      currentPlace: {},
      places: [
        {
          name: "Севкабель Порт",
          adress: "Кожевенная линия, 40, Санкт-Петербург, Россия, 199106",
          lat: 59.924415,
          lng: 30.241039,
          style: "1 стиль",
          architector: "Неизвестен",
          pic: "https://s.inyourpocket.com/gallery/213565.jpg",
          desc:
            "Порт «Севкабель» — это проект преобразования исторического «серого пояса» \n" +
            "в полифункциональное культурно-деловое пространство, открывающее новую \n" +
            "морскую набережную Санкт-Петербурга. \n" +
            "\n" +
            "Платформа проекта — промышленный комплекс «Севкабель», первая в России кабельная\n" +
            "мануфактура «Сименс & Гальске», расположенная на побережье Невы и Финского залива. \n" +
            "\n" +
            "Стратегическая цель долгосрочного развития — создание благоприятной\n" +
            "городской среды, улучшение качества жизни в Гавани Васильевского острова."
        },
        {
          name: "Ферма Бенуа",
          adress: "Тихорецкий пр., 17Г, Санкт-Петербург, Россия, 194064",
          lat: 60.019562,
          lng: 30.370316,
          style: "Викторианский",
          architector: "Иванов A. C.",
          pic:
            "https://i1.wp.com/antennadaily.ru/wp-content/uploads/2016/10/fermaphoto4-e1477775602234.jpg",
          desc:
            "Ресторан Ферма Бенуа вмещает до 250 гостей в зимнее время и до 400 – в летнее, благодаря террасе в Саду Бенуа. Доброжелательные хостесс встретят теплой улыбкой каждого гостя и проводят в один из залов Фермы Бенуа. Зона рядом с детской комнатой - излюбленное место семей с детьми. Любителям живой музыки и оживленной беседы подойдет центральный зал со сценой, где находится открытая кухня. Если вы планируете небольшое мероприятие, то рекомендуем занять нашу по-домашнему уютную гостиную, отделенную от основного зала стеклянными дверями. А на чашку кофе мы приглашаем вас пройти в Лавку, где продается свежая выпечка и сладости, производимые в нашей кондитерской."
        },
        {
          name: "Парк 300-летия Санкт-Петербурга",
          adress: "Приморский пр., 74, Санкт-Петербург, Россия, 197374",
          lat: 59.983694,
          lng: 30.194355,
          style: "2 стиль",
          architector: "2 архитектор",
          pic:
            "https://media-cdn.tripadvisor.com/media/photo-s/09/48/57/5c/300.jpg",
          desc:
            "Открытая территория с просторным пляжем, тенистыми аллеями и чистым морским воздухом. Находится непосредственно рядом с Финским заливом.\n" +
            "Самый юный парк Петербурга с впечатляющими возможностями для досуга: от наслаждения морским бризом и пляжным отдыхом на берегу до головокружительных приключений на аттракционах и городских праздниках. Парк зелёный и приятный для прогулок. Здесь много цветов, растут яблони, которые подарил парку город Хельсинки, липы и многое другое. Есть бассейн и фонтаны.\n" +
            "\n"
        },
        {
          name: "ЦНИИ РТК",
          adress: "Тихорецкий пр., 21, Санкт-Петербург, Россия, 194064",
          lat: 60.021126,
          lng: 30.369702,
          style: "Советский модернизм",
          architector: "Артюшин Б. И., " + "Савин С. В.",
          pic:
            "https://cdn.syg.ma/attachments/25ebe48655e5ecd5fa1ab3bce06e5c199889420b/store/ef79b051d963a46d431977dc820b29b12dab6f91fdf09c3b4fa527f9deac/file.jpeg",
          desc:
            "Строительство здания для конструкторского бюро было начато еще в 1973 году по проекту архитекторов С. В. Савина и Б. И. Артюшина. Стройка затянулась до 1987 года. Архитектурной доминатой комплекса была и остается башня-лаборатория для испытания космической техники. По своей устремленной в небеса форме она контрастировала с низким, вытянутым зданием института."
        },
        {
          name: "Лахта-центр",
          adress:
            "Парадная ул., 1, Санкт-Петербург, Ленинградская область, 191014",
          lat: 59.987263,
          lng: 30.177687,
          style: "Современный",
          architector: "Компания RMJM под руководством Тони Кеттла",
          pic: "https://img.tourister.ru/files/2/1/5/4/0/8/3/2/original.jpg",
          desc:
            "Лахта Центр – многофункциональный комплекс в Санкт-Петербурге со штаб-квартирой группы «Газпром» и общественными пространствами, занимающими около трети площадей. "
        }
      ]
    };
  }

  escFunction(event){
    if(event.keyCode === 27) {
      this.props.closeInfoBlock();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  addPlace = place => {
    let newPlaces = this.state.places;
    newPlaces.push(place);
    this.setState({ places: newPlaces });
  };

  setCurrentPlace = (place, i) => {
    this.setState({ currentPlace: place });
  };

  openInfoBlock = () => {
    this.setState({ showHideInfo: "-isInfoShown" });
  };

  closeInfoBlock = () => {
    this.setState({ showHideInfo: "" });
  };

  toggleSidebar = () => {
    var cssSidebar =
      this.state.showHideSidebar === "-isHidden" ? "-isShown" : "-isHidden";
    this.setState({ showHideSidebar: cssSidebar });
    var cssArrow =
      this.state.showHideArrow === "-isHiddenAngle" ? "" : "-isHiddenAngle";
    this.setState({ showHideArrow: cssArrow });
  };

  render() {
    return (
      <div className="main__container">
        <Sidebar
          places={this.state.places}
          currentPlace={this.state.currentPlace}
          setCurrentPlace={this.setCurrentPlace}
          showHideInfo={this.state.showHideInfo}
          showHideSidebar={this.state.showHideSidebar}
          showHideArrow={this.state.showHideArrow}
          toggleSidebar={this.toggleSidebar}
          openInfoBlock={this.openInfoBlock}
          closeInfoBlock={this.closeInfoBlock}
        />
        <MapComponent
          places={this.state.places}
          addPlace={this.addPlace}
          currentPlace={this.state.currentPlace}
          setCurrentPlace={this.setCurrentPlace}
          showHideInfo={this.state.showHideInfo}
          showHideSidebar={this.state.showHideSidebar}
          showHideArrow={this.state.showHideArrow}
          toggleSidebar={this.toggleSidebar}
          openInfoBlock={this.openInfoBlock}
          closeInfoBlock={this.closeInfoBlock}
        />
      </div>
    );
  }
}

export default App;
