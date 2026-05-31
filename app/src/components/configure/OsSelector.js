import { useState } from 'react';
import { Check } from 'lucide-react';
const OS_LIST = [
    { id: 'ubuntu-18', name: 'Ubuntu 18.04', icon: 'ubuntu' },
    { id: 'ubuntu-20', name: 'Ubuntu 20.04', icon: 'ubuntu' },
    { id: 'ubuntu-22', name: 'Ubuntu 22.04', icon: 'ubuntu' },
    { id: 'ubuntu-24', name: 'Ubuntu 24.04', icon: 'ubuntu' },
    { id: 'debian-10', name: 'Debian 10', icon: 'debian' },
    { id: 'debian-11', name: 'Debian 11', icon: 'debian' },
    { id: 'debian-12', name: 'Debian 12', icon: 'debian' },
    { id: 'alma-8', name: 'Alma 8', icon: 'alma' },
    { id: 'alma-9', name: 'Alma 9', icon: 'alma' },
];
const OS_ICONS = {
    ubuntu: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/120px-Logo-ubuntu_cof-orange-hex.svg.png',
    debian: 'https://www.debian.org/logos/openlogo-nd-100.png',
    alma: 'https://almalinux.org/images/almalinux-logo-white.svg',
};
export function OsSelector({ value, onChange }) {
    const [selected, setSelected] = useState(value ?? '');
    function handleSelect(id) {
        setSelected(id);
        onChange?.(id);
    }
    return (<div className="space-y-3">
      <p className="text-sm font-medium text-foreground">Operating System</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {OS_LIST.map((os) => {
            const isSelected = selected === os.id;
            return (<button key={os.id} type="button" onClick={() => handleSelect(os.id)} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-colors w-full
                ${isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card hover:border-primary/50 hover:bg-muted/40'}`}>
              <img src={OS_ICONS[os.icon]} alt={os.icon} className="w-7 h-7 object-contain shrink-0" onError={(e) => { e.target.style.display = 'none'; }}/>
              <span className="flex-1 text-sm font-medium truncate">{os.name}</span>
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
                ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/40'}`}>
                {isSelected && <Check className="w-2.5 h-2.5 text-primary-foreground" strokeWidth={3}/>}
              </span>
            </button>);
        })}
      </div>
    </div>);
}
//# sourceMappingURL=OsSelector.js.map