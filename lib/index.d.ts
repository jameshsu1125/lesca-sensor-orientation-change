declare const OrientationChange: {
    addEventListener: (callback?: (orientation: string) => void) => void;
    destroy: () => void;
};
export default OrientationChange;
