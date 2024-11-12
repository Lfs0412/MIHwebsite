// components/LoadingScreen.js
export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50 transition-opacity duration-500">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-foreground"></div>
        </div>
    );
}
