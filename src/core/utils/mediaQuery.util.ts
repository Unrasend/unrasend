import { fromEvent, Observable } from 'rxjs';
import { map, startWith, distinctUntilChanged } from 'rxjs/operators';

export const isXl = () => window.matchMedia('(max-width: 1599px)').matches;
export const isLg = () => window.matchMedia('(max-width: 1439px)').matches;
export const isMd = () => window.matchMedia('(max-width: 1279px)').matches;
export const isSm = () => window.matchMedia('(max-width: 1023px)').matches;
export const isXs = () => window.matchMedia('(max-width: 767px)').matches;

export interface ScreenSizes {
  xl: boolean;
  lg: boolean;
  md: boolean;
  sm: boolean;
  xs: boolean;
}

export const getScreenSizes = (): ScreenSizes => ({
  xl: isXl(),
  lg: isLg(),
  md: isMd(),
  sm: isSm(),
  xs: isXs(),
});

export const screenSizes$: Observable<ScreenSizes> = fromEvent(window, 'resize').pipe(
  startWith(null),
  map(() => getScreenSizes()),
  distinctUntilChanged((prev, curr) => 
    prev?.xl === curr.xl && 
    prev?.lg === curr.lg && 
    prev?.md === curr.md && 
    prev?.sm === curr.sm && 
    prev?.xs === curr.xs
  )
);
