import AppIcon from './AppIcon';

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  const iconName = isDark ? 'sun' : 'moon';
  const label = isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему';

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onToggle}
      className="pressable-crisp p-2 rounded-full text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
    >
      <AppIcon name={iconName} className="h-5 w-5" />
    </button>
  );
}

export default ThemeToggle;
