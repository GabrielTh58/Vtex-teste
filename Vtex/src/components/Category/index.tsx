interface CategoryProps {
    title: string;
    icon: React.ComponentType;
}

export function Category(props: CategoryProps) {
    return (
          <div className="text-center font-medium text-sm flex-1 flex flex-col items-center">
            <div className="flex justify-center w-32 h-32 bg-[#f4f4f4] items-center text-font-md mb-5 rounded-md shadow-category-shadow">
              <props.icon />
            </div>
            <span className="opacity-90">{props.title}</span>
            </div>
        
    )
}