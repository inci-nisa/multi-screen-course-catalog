export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
}

export const COURSES: Course[]=[
  {id:1, name:'Mobil Cihazlar İçin Uygulama Geliştirme', instructor:'İlhami Sel', description:'React Native ve Expo ile mobil uygulama geliştirme temelleri.'},
  {id:2, name:'Görüntü İşleme', instructor:'Fatih Talu',description:'Görüntü işleme algoritmaları ve pratik uygulamaları.'},
  {id:3, name:'Nesne Yönelimli Programlama', instructor:'Cengiz Hark', description:'Python kullanılarak nesne yönelimli programlama kavramları.'},
  {id:4, name:'Radyasyon Güvenliği ve Korunma', instructor:'Zehra Deniz Çırak', description:'Radyasyon güvenliği temel prensipleri.'},
  {id:5, name:'Veri Yapıları', instructor:'Adnan Fatih Kocamaz', description:'Temel veri yapıları ve algoritmalar.'}

];