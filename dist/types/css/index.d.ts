import { backgroundClip } from './property-descriptors/background-clip';
import { backgroundImage } from './property-descriptors/background-image';
import { backgroundOrigin } from './property-descriptors/background-origin';
import { backgroundPosition } from './property-descriptors/background-position';
import { backgroundRepeat } from './property-descriptors/background-repeat';
import { backgroundSize } from './property-descriptors/background-size';
import { borderBottomLeftRadius, borderBottomRightRadius, borderTopLeftRadius, borderTopRightRadius } from './property-descriptors/border-radius';
import { borderBottomStyle, borderLeftStyle, borderRightStyle, borderTopStyle } from './property-descriptors/border-style';
import { borderBottomWidth, borderLeftWidth, borderRightWidth, borderTopWidth } from './property-descriptors/border-width';
import { direction } from './property-descriptors/direction';
import { display } from './property-descriptors/display';
import { float } from './property-descriptors/float';
import { letterSpacing } from './property-descriptors/letter-spacing';
import { lineBreak } from './property-descriptors/line-break';
import { listStyleImage } from './property-descriptors/list-style-image';
import { listStylePosition } from './property-descriptors/list-style-position';
import { listStyleType } from './property-descriptors/list-style-type';
import { OVERFLOW } from './property-descriptors/overflow';
import { overflowWrap } from './property-descriptors/overflow-wrap';
import { textAlign } from './property-descriptors/text-align';
import { position } from './property-descriptors/position';
import { textShadow } from './property-descriptors/text-shadow';
import { textTransform } from './property-descriptors/text-transform';
import { transform } from './property-descriptors/transform';
import { transformOrigin } from './property-descriptors/transform-origin';
import { visibility } from './property-descriptors/visibility';
import { wordBreak } from './property-descriptors/word-break';
import { zIndex } from './property-descriptors/z-index';
import { CSSValue } from './syntax/parser';
import { Color } from './types/color';
import { opacity } from './property-descriptors/opacity';
import { textDecorationLine } from './property-descriptors/text-decoration-line';
import { LengthPercentage } from './types/length-percentage';
import { fontFamily } from './property-descriptors/font-family';
import { fontWeight } from './property-descriptors/font-weight';
import { fontVariant } from './property-descriptors/font-variant';
import { fontStyle } from './property-descriptors/font-style';
import { content } from './property-descriptors/content';
import { counterIncrement } from './property-descriptors/counter-increment';
import { counterReset } from './property-descriptors/counter-reset';
import { duration } from './property-descriptors/duration';
import { quotes } from './property-descriptors/quotes';
import { boxShadow } from './property-descriptors/box-shadow';
import { paintOrder } from './property-descriptors/paint-order';
import { webkitTextStrokeWidth } from './property-descriptors/webkit-text-stroke-width';
import { Context } from '../core/context';
import { objectFit } from './property-descriptors/object-fit';
export declare class CSSParsedDeclaration {
    animationDuration: ReturnType<typeof duration.parse>;
    backgroundClip: ReturnType<typeof backgroundClip.parse>;
    backgroundColor: Color;
    backgroundImage: ReturnType<typeof backgroundImage.parse>;
    backgroundOrigin: ReturnType<typeof backgroundOrigin.parse>;
    backgroundPosition: ReturnType<typeof backgroundPosition.parse>;
    backgroundRepeat: ReturnType<typeof backgroundRepeat.parse>;
    backgroundSize: ReturnType<typeof backgroundSize.parse>;
    borderTopColor: Color;
    borderRightColor: Color;
    borderBottomColor: Color;
    borderLeftColor: Color;
    borderTopLeftRadius: ReturnType<typeof borderTopLeftRadius.parse>;
    borderTopRightRadius: ReturnType<typeof borderTopRightRadius.parse>;
    borderBottomRightRadius: ReturnType<typeof borderBottomRightRadius.parse>;
    borderBottomLeftRadius: ReturnType<typeof borderBottomLeftRadius.parse>;
    borderTopStyle: ReturnType<typeof borderTopStyle.parse>;
    borderRightStyle: ReturnType<typeof borderRightStyle.parse>;
    borderBottomStyle: ReturnType<typeof borderBottomStyle.parse>;
    borderLeftStyle: ReturnType<typeof borderLeftStyle.parse>;
    borderTopWidth: ReturnType<typeof borderTopWidth.parse>;
    borderRightWidth: ReturnType<typeof borderRightWidth.parse>;
    borderBottomWidth: ReturnType<typeof borderBottomWidth.parse>;
    borderLeftWidth: ReturnType<typeof borderLeftWidth.parse>;
    boxShadow: ReturnType<typeof boxShadow.parse>;
    color: Color;
    direction: ReturnType<typeof direction.parse>;
    display: ReturnType<typeof display.parse>;
    float: ReturnType<typeof float.parse>;
    fontFamily: ReturnType<typeof fontFamily.parse>;
    fontSize: LengthPercentage;
    fontStyle: ReturnType<typeof fontStyle.parse>;
    fontVariant: ReturnType<typeof fontVariant.parse>;
    fontWeight: ReturnType<typeof fontWeight.parse>;
    letterSpacing: ReturnType<typeof letterSpacing.parse>;
    lineBreak: ReturnType<typeof lineBreak.parse>;
    lineHeight: CSSValue;
    listStyleImage: ReturnType<typeof listStyleImage.parse>;
    listStylePosition: ReturnType<typeof listStylePosition.parse>;
    listStyleType: ReturnType<typeof listStyleType.parse>;
    marginTop: CSSValue;
    marginRight: CSSValue;
    marginBottom: CSSValue;
    marginLeft: CSSValue;
    opacity: ReturnType<typeof opacity.parse>;
    overflowX: OVERFLOW;
    overflowY: OVERFLOW;
    overflowWrap: ReturnType<typeof overflowWrap.parse>;
    paddingTop: LengthPercentage;
    paddingRight: LengthPercentage;
    paddingBottom: LengthPercentage;
    paddingLeft: LengthPercentage;
    paintOrder: ReturnType<typeof paintOrder.parse>;
    position: ReturnType<typeof position.parse>;
    textAlign: ReturnType<typeof textAlign.parse>;
    textDecorationColor: Color;
    textDecorationLine: ReturnType<typeof textDecorationLine.parse>;
    textShadow: ReturnType<typeof textShadow.parse>;
    textTransform: ReturnType<typeof textTransform.parse>;
    transform: ReturnType<typeof transform.parse>;
    transformOrigin: ReturnType<typeof transformOrigin.parse>;
    visibility: ReturnType<typeof visibility.parse>;
    webkitTextStrokeColor: Color;
    webkitTextStrokeWidth: ReturnType<typeof webkitTextStrokeWidth.parse>;
    wordBreak: ReturnType<typeof wordBreak.parse>;
    zIndex: ReturnType<typeof zIndex.parse>;
    objectFit: ReturnType<typeof objectFit.parse>;
    constructor(context: Context, declaration: CSSStyleDeclaration);
    isVisible(): boolean;
    isTransparent(): boolean;
    isTransformed(): boolean;
    isPositioned(): boolean;
    isPositionedWithZIndex(): boolean;
    isFloating(): boolean;
    isInlineLevel(): boolean;
}
export declare class CSSParsedPseudoDeclaration {
    content: ReturnType<typeof content.parse>;
    quotes: ReturnType<typeof quotes.parse>;
    constructor(context: Context, declaration: CSSStyleDeclaration);
}
export declare class CSSParsedCounterDeclaration {
    counterIncrement: ReturnType<typeof counterIncrement.parse>;
    counterReset: ReturnType<typeof counterReset.parse>;
    constructor(context: Context, declaration: CSSStyleDeclaration);
}
