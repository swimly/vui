/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VButton {
        "conner": boolean;
        "outline": boolean;
        "rounder": boolean;
        "type": string;
    }
    interface VIcon {
    }
    interface VNavbar {
    }
    interface VPage {
    }
    interface VScrollView {
    }
    interface VTabbar {
    }
}
declare global {
    interface HTMLVButtonElement extends Components.VButton, HTMLStencilElement {
    }
    var HTMLVButtonElement: {
        prototype: HTMLVButtonElement;
        new (): HTMLVButtonElement;
    };
    interface HTMLVIconElement extends Components.VIcon, HTMLStencilElement {
    }
    var HTMLVIconElement: {
        prototype: HTMLVIconElement;
        new (): HTMLVIconElement;
    };
    interface HTMLVNavbarElement extends Components.VNavbar, HTMLStencilElement {
    }
    var HTMLVNavbarElement: {
        prototype: HTMLVNavbarElement;
        new (): HTMLVNavbarElement;
    };
    interface HTMLVPageElement extends Components.VPage, HTMLStencilElement {
    }
    var HTMLVPageElement: {
        prototype: HTMLVPageElement;
        new (): HTMLVPageElement;
    };
    interface HTMLVScrollViewElement extends Components.VScrollView, HTMLStencilElement {
    }
    var HTMLVScrollViewElement: {
        prototype: HTMLVScrollViewElement;
        new (): HTMLVScrollViewElement;
    };
    interface HTMLVTabbarElement extends Components.VTabbar, HTMLStencilElement {
    }
    var HTMLVTabbarElement: {
        prototype: HTMLVTabbarElement;
        new (): HTMLVTabbarElement;
    };
    interface HTMLElementTagNameMap {
        "v-button": HTMLVButtonElement;
        "v-icon": HTMLVIconElement;
        "v-navbar": HTMLVNavbarElement;
        "v-page": HTMLVPageElement;
        "v-scroll-view": HTMLVScrollViewElement;
        "v-tabbar": HTMLVTabbarElement;
    }
}
declare namespace LocalJSX {
    interface VButton {
        "conner"?: boolean;
        "outline"?: boolean;
        "rounder"?: boolean;
        "type"?: string;
    }
    interface VIcon {
    }
    interface VNavbar {
    }
    interface VPage {
    }
    interface VScrollView {
    }
    interface VTabbar {
    }
    interface IntrinsicElements {
        "v-button": VButton;
        "v-icon": VIcon;
        "v-navbar": VNavbar;
        "v-page": VPage;
        "v-scroll-view": VScrollView;
        "v-tabbar": VTabbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "v-button": LocalJSX.VButton & JSXBase.HTMLAttributes<HTMLVButtonElement>;
            "v-icon": LocalJSX.VIcon & JSXBase.HTMLAttributes<HTMLVIconElement>;
            "v-navbar": LocalJSX.VNavbar & JSXBase.HTMLAttributes<HTMLVNavbarElement>;
            "v-page": LocalJSX.VPage & JSXBase.HTMLAttributes<HTMLVPageElement>;
            "v-scroll-view": LocalJSX.VScrollView & JSXBase.HTMLAttributes<HTMLVScrollViewElement>;
            "v-tabbar": LocalJSX.VTabbar & JSXBase.HTMLAttributes<HTMLVTabbarElement>;
        }
    }
}