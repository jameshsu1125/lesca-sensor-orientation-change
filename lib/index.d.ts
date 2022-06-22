declare const OrientationChange: {
    addEventListener: (callback?: (orientation: string) => void) => void;
    destory: () => void;
};
export default OrientationChange;
