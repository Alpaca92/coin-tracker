// import original module declarations (.d mean declaration)
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    chipsColor: string;
    bgColor: string;
    accentColor: string;
  }
}
