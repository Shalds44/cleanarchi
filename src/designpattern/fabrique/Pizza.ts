export abstract class Pizza {

  abstract description(): string
  preparer():string{
    return "Préparation"
  };
  cuire():string{
    return "cuire"
  };
  couper():string{
    return "couper"
  };
  emballer():string{
    return "emballer"
  };

}