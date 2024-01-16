class ParkingSystem {
    private int[] system;
    public ParkingSystem(int big, int medium, int small) {
        system = new int[]{big, medium, small};        
    }
    
    public boolean addCar(int carType) {
        system[carType - 1] -= 1;
            if (system[carType - 1] < 0) {
                return false;
            }
        return true;
    }
}

