export interface IAutoData {
    id: string;
    img?: string;
    brand: string;
    model: string;
    color: string;
    price: string;
    year: string;
    engineType: 'petrol' | 'diesel' | 'electric';
    transmission: 'automatic' | 'manual' | 'robotic'; // 'robotic' - доступно только для типа двигателя 'petrol' или 'diesel'
    range?: string; // Доступно только для типа engineType 'electric'
}