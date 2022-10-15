// Слайдер
new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  }
});

//Яндекс карта
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [54.19520247, 37.62037778],
    zoom: 13
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [54.19520247, 37.62037778]
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: 'Тульский кремль',
        hintContent: 'Это самый центр Тульского кремля'
      }
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      iconColor: 'red',
      // Метку можно перемещать.
      draggable: false
    });

  myMap.geoObjects
    .add(myGeoObject)
}